import Layout from '../components/Layout.js';
import PipelinePage from './pipelines.js';

export default function Resources() {
    return (
        <Layout>
            <div className="resourceSection">
                <h3>Free Resources</h3>
                <p className="subtitle">DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:</p>
                <ul className="resourcesListRow">
                    <li className="resourcePanel">DataJoint Reference Documentation
                        <a href="https://docs.datajoint.org" target="_blank"><img src="/static/images/icons/doc_white.png" /></a></li>
                    <li className="resourcePanel">DataJoint <br />Tutorials
                        <a href="https://tutorials.datajoint.org" target="_blank"><img src="/static/images/icons/blackboard_white.png" /></a></li>
                    <li className="resourcePanel">DataJoint Server Configuration
                        <a href="https://github.com/datajoint/mysql-docker" target="_blank"><img src="/static/images/icons/server-config-white.png" /></a></li>
                    <li className="resourcePanel">DataJoint <br />Python Client
                        <a href="https://github.com/datajoint/datajoint-python" target="_blank"><img src="/static/images/icons/python-logo-monoc.png" /></a></li>
                    <li className="resourcePanel">DataJoint <br />MATLAB Client
                        <a href="https://github.com/datajoint/datajoint-matlab" target="_blank"><img src="/static/images/icons/matlab-logo-monoc.png" /></a></li>
                </ul>
            </div>
            <PipelinePage></PipelinePage>
            <style jsx>{` {
                h3 {
                    margin: 0;
                }

                img {
                    height: 70px;
                }

                a {
                    display: block;
                    margin-top: 13px;
                }

                .resourceSection {
                    background-image: url("/static/images/artwork/blue-cherry-flicker.gif");
                    background-size: cover;
                    background-attachment: fixed;
                    background-repeat: no-repeat;
                    background-position: top right;
                    color: #DDD;
                    padding: 80px 0 60px;
                    // background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.7));
                }
                .subtitle {
                    line-height: 0.8;
                    font-size: 0.85em;
                    padding: 5px 5%;
                    text-align: center;
                }

                .resourcePanel {
                    width: 17%;
                    border-radius: 4px;
                    border: 1px solid transparent;
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 20px 8px;
                    margin: 5px;
                }
                .resourcePanel:hover {
                    border: 1px solid white;
                    // background-color: rgba(100, 0, 126, 0.6);
                    background-color: rgba(0, 0, 0, 0.75);
                }

                .resourcesListRow {
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                }
                @media (max-width: 1440px) {
 
                }
               
                @media (max-width: 768px) {
                        .subtitle {
                            line-height: 1;
                            font-size: 0.82em;
                        }

                        img {
                            height: 50px;
                        }

                        .resourcePanel {
                            font-size: 82%;
                        }
                }
            }
            `}</style>
        </Layout>
    );
}

