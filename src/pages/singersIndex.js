// import React from 'react';
// import { Link } from 'gatsby';

// const SingersIndex = ({ data }) => (
//     <div>
//         <h1>Voice Types</h1>
//         { data.allMarkdownRemark.edges.map(voice => (
//             <div key={ voice.node.id }>
//                 <Link to={ voice.node.frontmatter.title }>
//                     <h3>{ voice.node.frontmatter.title }</h3>
//                 </Link>
//             </div>
//         ))}
//     </div>
// )

// export const pageQuery = graphql`
// query SingerIndexQuery {
//     allMarkdownRemark {
//         edges {
//             node {
//                 id
//                 frontmatter {
//                     path
//                     title
//                     date
//                 }
//             }
//         }
//     }
// }
// `

// export default SingersIndex;