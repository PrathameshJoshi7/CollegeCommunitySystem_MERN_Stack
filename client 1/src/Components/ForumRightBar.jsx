import React from 'react'
import './CSS files/ForumRightBar.css'
//import Widget from './Widget'
import WidgetTags from './WidgetTags'
const ForumRightBar = () => {
  return (
    <aside className='right-sidebar'>
        {/* <Widget /> */}
        <WidgetTags />
    </aside>
  )
}

export default ForumRightBar
