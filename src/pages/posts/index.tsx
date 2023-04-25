import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>26 de Abr de 2022
                        </time>
                        <strong>Next Level Week: os caminhos que trilhamos até aqui</strong>
                        <p>Uma semana inteira de conteúdos práticos voltados para programação. O objetivo é específico e direto: treinar e capacitar profissionais que procuram incluir em seus portfólios o que há de mais novo e tendência no mercado de TI no Brasil e no mundo.</p>
                    </a>
                    <a href="">
                        <time>26 de Abr de 2022
                        </time>
                        <strong>Next Level Week: os caminhos que trilhamos até aqui</strong>
                        <p>Uma semana inteira de conteúdos práticos voltados para programação. O objetivo é específico e direto: treinar e capacitar profissionais que procuram incluir em seus portfólios o que há de mais novo e tendência no mercado de TI no Brasil e no mundo.</p>
                    </a>
                    <a href="">
                        <time>26 de Abr de 2022
                        </time>
                        <strong>Next Level Week: os caminhos que trilhamos até aqui</strong>
                        <p>Uma semana inteira de conteúdos práticos voltados para programação. O objetivo é específico e direto: treinar e capacitar profissionais que procuram incluir em seus portfólios o que há de mais novo e tendência no mercado de TI no Brasil e no mundo.</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 100
    })

    console.log('===========', JSON.stringify(response, null, 2));

    // const posts = response.results.map(post => {
    //     return {
    //         slug: post.uid,
    //         title: RichText.asText(post.data.title),
    //         excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
    //         updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
    //             day: '2-digit',
    //             month: 'long',
    //             year: 'numeric'
    //         })
    //     }
    // })

    return {
        props: {}
    }
}