import React from 'react'
import matter from 'gray-matter';
import _ from 'lodash';
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
                // document = { content: '', data: { title:'', date: 2018-12-04T00:00:00.000Z}, isEmpty: false, excerpt: '', orig: <Buffer 2d 2d...>}
                
                return {
                    document,
                    slug
                };
            });
            // console.log(data[0]);
            const sortedData = _.orderBy(data, ['document.data.date'], ['asc']);
            console.log(sortedData);
            return sortedData;
        })(require.context('../posts', true, /\.md$/));
        // console.log(posts[0].document.data);
        return {
            posts
        };
    }
    render() {
        return (
            <Layout>
                <h1>News</h1>
                {this.props.posts.map(({ document: { data }, slug }) => (
                    <div>
                        <h5>{data.date.toString().split('T')[0]}</h5>
                        <Link href={{ pathname: '/post', query: { id: slug } }} key={slug}>
                            <p>{data.title}</p>
                        </Link>
                    </div>
                ))}
            </Layout>
        )
    }
}