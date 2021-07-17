import { Link, graphql } from "gatsby"
import * as React from "react"

import Template from "../components/Template"

const CreditsPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Template>
      <div className="mt-10 py-10 text-center">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
        Event Portfolio
        </h3>
        <p>
          
WEB DEVELOPMENT
Principally building RESTful APIs in PHP on the backend with a good understanding of Node.js and use of sockets. JQuery and Bootstrap on the frontend running in Electron & Apache Cordova on some projects.

 
LIVE SOUND
Theatrical & live event front-of-house engineer with experience line-by-line mixing musical theatre and associated sound design.

 
LIGHTING DESIGN
Lighting design for theatre and live events, including busking - normally on ETC EOS

 
VIDEO
Experienced video director (documentary format), editor and vision mixer (including live sport).
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
          {posts.filter(post => (post.node.frontmatter.type === "liveEvent" && post.node.frontmatter.example !== true)).map(({ node: post }) => {
            return (
              <div key={post.id}>
                <h1>
                  <Link to={`/events/${post.frontmatter.slug}`}>{post.frontmatter.Name}</Link>
                </h1>
                <h2>{post.frontmatter.Date}</h2>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </Template>
  )
}

export const pageQuery = graphql`
  query eventPostQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___Date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            slug
            type
            example
            Name
            Date(formatString: "dddd DD MMMM YYYY")
            EndDate
            Name
            Author
            Director
            Venue
            Roles
            Tags
            EventType
            PerformancesAttended
            Fee
            Professional
            Paid
            ImageThumb
            ImageCredit
            Client
          }
        }
      }
    }
  }
`

export default CreditsPage