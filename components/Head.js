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