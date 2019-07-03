import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout.js';

function formatDate(date) {
    return date.toString().split(' ').slice(1, 4).join(' ') //TODO: toString() by default displaces the date by +1 - fix to reflect actual date
}
class PostImage extends React.Component {
    render(img = this.props) {
        return (
            <div className="postImageContainer">
                <img src={img.src} alt={img.title} />
                <style jsx>{`
                    .postImageContainer img {
                        max-width: 500px;
                    }
                    @media (max-width: 768px) {
                        .postImageContainer img {
                            max-width: 90%;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default class extends React.Component {
    // static async getInitialProps({ query }) { // old stuff - if server was running...
    //     const post = await import(`../static/posts/${query.id}.md`);
    //     const document = matter(post.default);
    //     return {
    //         ...document
    //     };
    // }
    static async getInitialProps(props) {
        const fileName = props.asPath.split('/')[2]
        // console.log('filename is: ', fileName)
        const post = await import(`../../markdowns/${fileName}.md`);

        const document = matter(post.default);
        if (document) {
            const formattedDate = formatDate(document.data.date)
            document.data['dateOnly'] = formattedDate;
            // document['data']['dateOnly'] = formatDate(post['document']['data']['date']);
        }

        return {
            ...document
        };
    }
    render() {
        if (this.props.content) {
            return (
                <Layout>
                    <div className="postContainer">
                        <br />
                        <h3>{this.props.data.title}</h3>
                        {/* <i>{`${this.props.data.dateOnly} | Tags: ${this.props.data.tags} | Categories: ${this.props.data.categories}`}</i> */}
                        <i>{`${this.props.data.dateOnly}`}</i>
                        <div className="postContentWrapper">
                            <ReactMarkdown source={this.props.content}
                                escapeHtml={false}
                                renderers={{
                                    image: props => (
                                        <PostImage {...props} />
                                    )
                                }} />
                        </div>
                    </div>
                    <style jsx>{`
                    .postContainer {
                        padding: 10px 40px 8% 40px;
                        background-color: white;
                        text-align: left;
                    }

                    .postContentWrapper {
                        width: 66%;

                    }
                    @media (max-width: 1024px) {
                        
                    }
                    @media (max-width: 768px) {
                        .postContentWrapper {
                            width: 95%;
                            text-align: left;
                            padding-bottom: 4%;
                        }
                        
                    }
                    @media (max-width: 480px) {
                        .postContentWrapper {
                            width: 100%;
                            padding-bottom: 7%;
                        }
                    }
=
                `}</style>
                </Layout>
            )
        } else {
            return (
                <Layout>
                    <div className="postContainer">
                        <br />
                        <h3>Under Construction</h3>

                    </div>
                    <style jsx>{`
                        .postContainer {
                            padding: 10px 40px 8% 40px;
                            background-color: white;
                            text-align: left;
                        }

    =
                    `}</style>
                </Layout>
            )
        }
    }
}