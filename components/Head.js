import Head from 'next/head'

export default() => (
    <div>
        <Head>
            <meta name="robots" content="noindex" />
            {/* <meta name="keywords" content="DataJoint, datajoint neuro, data pipeline, data, neuroscience, AI, machine learning" />
            <meta name="description" content="DataJoint NEURO enables research teams to design scientific 
                        databases and computational pipelines by providing support, resources, and services." /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>

            <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/static/images/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/static/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/static/images/favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#603cba" />
            <meta name="msapplication-config" content="/static/images/favicons/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
            
        </Head>
        <style jsx global>{`
            body {
                margin: 0px;
                padding: 0;
            }
            canvas {
                width: 100%;
                height: 100%;
            }
        `}</style>
    </div>
)