import React from 'react'
import matter from 'gray-matter';
import _ from 'lodash';
import Link from 'next/link';
import Layout from '../components/Layout.js';

const newsIndexContainer = {
    marginBottom: '8%'
}

function formatDate(date) {
    console.log('inside formatDate');
    // 2017-06-12T19:33:20.000Z ...(date) 
    // 'Mon Jun 12 2017 14:33:20 GMT-0500 (CDT) ...(date.toString())
    console.log(date, '(original)', date.toString(), '(postFormat)')
    // return date.toString().split('T')[0]
    return date.toString().split(' ').slice(1, 4).join(' ') //TODO: toString() by default displaces the date by +1 - fix to reflect actual date
}
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
            const sortedData = _.orderBy(data, ['document.data.date'], ['desc']);
            for (const post of sortedData) {
                post['document']['data']['dateOnly'] = formatDate(post['document']['data']['date']);
                console.log(post.document.data.date, post.document.data.dateOnly);
            }
            // sortedData['document']['data']['date'].toString().split('T')[0];
            // console.log(sortedData[0].document.data);
            return sortedData;
        })(require.context('../posts', true, /\.md$/));
        return {
            posts
        };
    }
    render() {
        return (
            <Layout>
                <div style={newsIndexContainer}>
                    <h1>News</h1>
                    {this.props.posts.map(({ document: { data }, slug }) => (
                    // {this.props.posts.map(({ document, slug }) => (
                        <div>
                            <h5>{data.dateOnly}</h5>
                            <Link href={{ pathname: '/post', query: { id: slug } }} key={slug}>
                                {/* <p>{ document.data.dateOnly} / {slug}</p> */}
                                <p>{data.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </Layout>
        )
    }
}