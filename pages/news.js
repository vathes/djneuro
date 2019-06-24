import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Link from 'next/link';
import Layout from '../components/Layout.js';

function formatDate(date) {
    console.log('inside formatDate');
    // 2017-06-12T19:33:20.000Z ...(date) 
    // 'Mon Jun 12 2017 14:33:20 GMT-0500 (CDT) ...(date.toString())
    console.log(date, '(original)', date.toString(), '(postFormat)')
    return date.toString().split(' ').slice(1, 4).join(' ') //TODO: toString() by default displaces the date by +1 - fix to reflect actual date
}

class PostImage extends React.Component {
    render(img=this.props) {
        // console.log(img)
        return (
            <div>
                <div className="blogImageContainer">
                 <img src={img.src}  alt={img.title}/>
                </div>
                <style jsx>{`
                    .blogImageContainer img {
                        width: 200px;
                        position: relative;
                        top: 0px;
                    }
                `}</style>
            </div>
        )
    }
}

class StyledP extends React.Component {
    render(paragraph=this.props) {
        // console.log(paragraph)
        return (
            <div>
                <div className="paragraphStyle">{paragraph.children}</div>
                <style jsx>{`
                    .paragraphStyle {
                        line-height: 1.5;
                        color: midnightblue;
                    }
                `}</style>
            </div>
        )
    }
}

class BlogIndex extends React.Component {
    constructor(props) {
        super(props)
    }
// export default class extends React.Component {
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
                // console.log(post.document.data.date, post.document.data.dateOnly);
            }
            // sortedData['document']['data']['date'].toString().split('T')[0];
            console.log(sortedData[0].document);
            return sortedData;
        })(require.context('../posts', true, /\.md$/));
        return {
            posts
        };
    }
    render() {
        return (
            <Layout>
                <h3>Under Construction</h3>
                <div className="newsIndexContainer">
                    <h1>News</h1>
                    {this.props.posts.map(({ document: { data, content }, slug }) => (
                        <div>
                            <h5>{data.dateOnly}</h5>
                            <Link href={{ pathname: '/post', query: { id: slug } }} key={slug}>
                                <div className="postCard">
                                    <p className="postTitle">{data.title}</p>
                                    <div className="mdWrap">
                                        <ReactMarkdown source={content} 
                                            renderers={{
                                                image: props => (
                                                    <PostImage className="testStyleImage" {...props} />
                                                ),
                                                paragraph: props => (
                                                    <StyledP {...props} />
                                                )
                                            }}/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    div.newsIndexContainer {
                        margin-bottom: 8%;
                        background-color: rgba(10, 10, 110, 0.1);
                    }
                    .postCard {
                        border: 2px solid black;
                        border-radius: 3px;
                        height: 250px;
                        overflow: scroll;
                        width: 90%;
                        transform: translateX(5%);
                    }

                    .postTitle {
                        background-color: midnightblue;
                        color: white;
                        font-size: 120%;
                        margin: 0;
                        height: 40px;
                        padding-top: 20px;
                    }

                    .mdWrap {
                        text-align: left;
                        padding: 10px 40px;
                        overflow: scroll;
                        background-color: white;
                    }
                    .mdWrap .testStyleImage {
                        border: 2px solid pink;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default BlogIndex;