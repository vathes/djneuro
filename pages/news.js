import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Link from 'next/link';
import Layout from '../components/Layout.js';

function formatDate(date) {
    // console.log('inside formatDate');
    // 2017-06-12T19:33:20.000Z ...(date) 
    // 'Mon Jun 12 2017 14:33:20 GMT-0500 (CDT) ...(date.toString())
    // console.log(date, '(original)', date.toString(), '(postFormat)')
    return date.toString().split(' ').slice(1, 4).join(' ') //TODO: toString() by default displaces the date by +1 - fix to reflect actual date
}

class StyledP extends React.Component {
    render(paragraph=this.props) {
        // console.log(paragraph)
        return (
            <div>
                <p className="paragraphStyle">{paragraph.children}</p>
                <style jsx>{`
                    .paragraphStyle {
                        // border: 2px dotted green;
                        display: block;
                        margin: 0 15px;
                        padding-top: 10px;
                        line-height: 1.5rem;
                    }

                    .paragraphStyle > div {
                        // border: 1px solid red;
                    }
                `}</style>
            </div>
        )
    }
}

class PostImage extends React.Component {
    render(img = this.props) {
        // console.log(img)
        return (
            <div className="blogImageContainer">
                <img src={img.src} alt={img.title} />
                <style jsx>{`
                    .blogImageContainer img {
                        width: 33%;
                        margin-right: 15px;
                        margin-top: -10px;
                        margin-left: -15px;
                        float: left;
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
            // console.log(sortedData[0].document);
            return sortedData;
        })(require.context('../markdowns', true, /\.md$/));
        return {
            posts
        };
    }
    render() {
        return (
            <Layout>
                <div className="newsIndexContainer">
                    <br />
                    <h1>News</h1>
                    {this.props.posts.map(({ document: { data, content }, slug }) => (
                        <div className="postCard">
                            <div className="postHeader">
                                <span className="postDate">{data.dateOnly}</span>
                                <span className="postTitle">{data.title}</span>
                            </div>
                            <div className="mdWrap">
                                <ReactMarkdown source={content} 
                                    escapeHtml={false}
                                    renderers={{
                                        image: props => (
                                            <PostImage {...props} />
                                        ),
                                        paragraph: props => (
                                            <StyledP {...props} />
                                        )
                                    }}/>
                            </div>
                            <div className="readMore">
                                <div className="readMoreOverlay">
                                    <div className="readMoreLink">
                                        <Link href={{ pathname: '/post/' + slug }} key={slug}><a>Read More &#x21c0;</a></Link>
                                    {/* <Link href={{ pathname: '/post', query: { id: slug } }} key={slug}><a>Read More &#x21c0;</a></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    div.newsIndexContainer {
                        padding-bottom: 8%;
                        background-color: rgba(10, 10, 110, 0.1);
                    }
                    .postCard {
                        border: 2px solid black;
                        border-radius: 3px;
                        width: 90%;
                        transform: translateX(5%);
                        margin-bottom: 15px;
                    }

                    .postHeader {
                        background-color: #001226; // same as footer top color
                        color: rgb(220, 220, 220);
                        font-size: 120%;
                        margin: 0;
                        // padding-top: 20px;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                    }
                    .postDate {
                        padding: 13px;
                        border-right: 1px solid white;
                        // background-color: blue;
                    }
                    .postTitle {
                        padding: 13px 13px 13px 18px;
                    }

                    .mdWrap {
                        text-align: left;
                        padding: 0px 15px 20px 0px;
                        background-color: white;
                        height: 160px;
                        position: relative;
                        overflow: hidden;
                        color: #001226; // same as footer top color
                    }
                    .readMore {
                        width: 100%;
                        display: block;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        text-align:center;
                    }
                    .readMoreOverlay {
                        background: linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 1));
                        position: relative;
                        height: 50px;
                        width: 100%;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                    .readMoreLink {
                        font-size: 120%;
                        margin-top: 14px;
                        position: relative;
                    }
                    @media (max-width: 1440px) {
                
                    }
                    @media (max-width: 768px) {
                        div.newsIndexContainer {
                            padding-bottom: 10%;
                        }
                        .postHeader {
                            font-size: 110%;
                        }
                        .readMoreLink {
                            font-size: 110%;
                        }
                    }
                    @media (max-width: 480px) {
                        div.newsIndexContainer {
                            padding-bottom: 12%;
                        }
                        .postHeader {
                            font-size: 100%;
                        }
                        .readMoreLink {
                            font-size: 100%;
                        }
                        
                    }
                `}</style>
            </Layout>
        )
    }
}

export default BlogIndex;