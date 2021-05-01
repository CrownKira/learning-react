import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:50PM"
                    content="test comment"
                    avatar={faker.image.animals()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Yesterday at 6:50PM"
                    content="I like this comment"
                    avatar={faker.image.animals()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 8:50PM"
                    content="test comment"
                    avatar={faker.image.animals()}
                />
            </ApprovalCard>
        </div>
    );
}



ReactDOM.render(
    <App />,
    document.querySelector('#root')
);