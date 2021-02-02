import React from 'react';
import './Widgets.css'; 
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
<div class="widgets__article">
<div class="widgets__articleLeft">
 <FiberManualRecordIcon/>
</div>
<div class="widgets__articleRight">
    <h4>{heading}</h4>
    <p>{subtitle}</p>
</div>
</div>
    )
    return (
        <div className= 'widgets'>
<div class="widgets__header">
    <h2>LinkedIn News</h2>
    <InfoIcon/>
</div>
{newsArticle("muhal24 react clone", "Top news - 9099 readers")}
{newsArticle("The Six Morning Habits of High Performers", "How to Be Awesome at Your Job")}
{newsArticle("Unconscious Bias", "Stacey Gordon")}
{newsArticle("muhal24 react clone", "Top news - 9099 readers")}
{newsArticle("The Six Morning Habits of High Performers", "How to Be Awesome at Your Job")}
{newsArticle("Unconscious Bias", "Stacey Gordon")}
</div>
    );
}

export default Widgets
