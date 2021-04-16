import React from "react";
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'

const HomePage = ({history}) => {
  console.log(history)
  return (
    <div className="homepage">
      <Directory history={history}/>
    </div>
  );
};

export default HomePage;
