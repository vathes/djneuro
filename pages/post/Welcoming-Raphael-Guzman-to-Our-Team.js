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
                `}</style>
            </div>
        )
    }
}

export default class extends React.Component {
    static async getInitialProps(props) {
        console.log('initial prop setup. printing props');
        console.log(props);
        const fileName = props.asPath.split('/')[2]
        console.log('filename is: ', fileName)
        const post = await import(`../../markdowns/${fileName}.md`);

        const document = matter(post.default);
        if (document) {
            console.log(document.data.date)
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
                        // text-align: left;

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