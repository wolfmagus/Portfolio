import React from 'react'
import Issue from './Issue'

export default function IssueList(props){
  const { issues } = props
  // console.log(issues)
  return (
    <div className="issue-list">
      { issues.map(issue => { return <Issue issue = {issue} key={issue._id}/>}) }
    </div>
  )
}

// import React from 'react'
// import Issue from './Issue.js'

// export default function IssueList(props){
//   const { issues } = props
//   return (
//     <div className="issue-list">
//       { issues.map(issue => <Issue {...issue} key={issue._id}/>) }
//     </div>
//   )
// }

