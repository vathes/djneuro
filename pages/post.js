import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout.js';

export default class extends React.Component {
    static async getInitialProps({ query }) {
        const post = await import(`../posts/${query.id}.md`);
        const document = matter(post.default);
        return {
            ...document
        };
    }
    render() {
        return (
            <Layout>
                <h3>{this.props.data.title}</h3>
                <i>{`${this.props.data.date}} | Tags: ${this.props.data.tags} | Categories: ${this.props.data.categories}`}</i>
                <ReactMarkdown source={this.props.content} />
            </Layout>
        )
    }
}