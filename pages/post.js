import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout.js';

class PostImage extends React.Component {
    render(img=this.props) {
        return (
            <div className="postImageContainer">
                <img src={img.src} alt={img.title} />
                <style jsx>{`
                    .postImageContainer img {
                        max-width: 500px;
                    }
                `}</style>
            </div>
        )
    }
}

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
                            }}/>
                    </div>
                </div>
                <style jsx>{`
                    .postContainer {
                        padding: 10px 40px 8% 40px;
                        background-color: white;
                        text-align: left;
                    }

                    .postContentWrapper {
                        // text-align: left;

                    }
=
                `}</style>
            </Layout>
        )
    }
}