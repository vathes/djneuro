import React from 'react'
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/Layout.js';

export default class extends React.Component {
    static async getInitialProps() {
        // Get contents from posts folder
        const posts = (items => {
            // console.log(items);
            const keys = items.keys();
            const values = keys.map(items);
            const data = keys.map((key, index) => {
                // Create slug from filename
                const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
                const value = values[index];
                // Parse document
                const document = matter(value.default);
                return {
                    document,
                    slug
                };
            });
            return data;
        })(require.context('../posts', true, /\.md$/));
        return {
            posts
        };
    }
    render() {
        return (
            <Layout>
                <h1>News</h1>
                {this.props.posts.map(({ document: { data }, slug }) => (
                    <Link href={{ pathname: '/post', query: { id: slug } }} key={slug}>
                        <p>{data.title}</p>
                    </Link>
                ))}
            </Layout>
        )
    }
}