import React from "react"

import Layout from "../components/layout"
import Footer from "../components/footer"

const MePage = ({ data }) => (
    <Layout>
        <div className="centered-content">
            <br></br>
            <br></br>
            <br></br>
        <h1 style={{ paddingLeft: "0px" }}>Resume</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div hey={post.node.id}>
                <h1 style={{ color: "#DDA0DD"}}>
                    {post.node.frontmatter.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
                <br />
                <br />
            </div>
        ))}
        </div>
        <Footer />
    </Layout>
)

export const pageQuery = graphql`
    query MeIndexQuery {
        allMarkdownRemark (filter: {frontmatter: {slug: {eq: "resume"}}}){
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        slug
                        template
                    }
                    html
                }
            }
        }
    }
`
export default MePage