import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="John"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 2:45PM"
                    content="I like the details"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Max"
                    timeAgo="Yesterday at 4:45PM"
                    content="Great!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));