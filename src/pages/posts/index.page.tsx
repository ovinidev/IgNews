/* eslint-disable arrow-body-style */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import Link from 'next/link';
import { getPrismicClient } from '../../services/prismic';
import {
  Container, PostContainer, Time, Title, Content,
} from './page';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[]
}

interface IPosts {
  uid: string
  title: string
  content: any[]
  last_publication_date: Date
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Container>
      <Head>
        <title>Posts</title>
      </Head>

      {posts.map((post) => {
        return (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <PostContainer>
              <Time>{post.updatedAt}</Time>
              <Title>{post.title}</Title>
              <Content>{post.excerpt}</Content>
            </PostContainer>
          </Link>
        );
      })}

    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismicInstance = getPrismicClient();

  const response = await prismicInstance.query<IPosts>([
    Prismic.Predicates.at('document.type', 'publication'),
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  });

  // console.log(JSON.stringify(response, null, 2));

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find((content) => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date!).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
