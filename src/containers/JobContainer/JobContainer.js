import React, { Component } from "react";
import JobContent from "../../components/Job/JobLayout/JobContent/JobContent";
// import JobLayout stuff

class JobContainer extends Component {
  render() {
    return (
      <JobContent
        company={"Google"}
        location={"Austin"}
        salary={"$100,000"}
        title={"Software Developer"}
        postURL={"indeed.com"}
        subtitle={"Google your life away"}
        headquarters={"Hippie Land, CA"}
        url={"google.com"}
        year={"1998"}
        type={"Public"}
        country={"USA"}
      />
    );
  }
}
/*
<JobContent
  company,
  location,
  salary,
  postUrl,
  subtitle,
  headquarters,
  url,
  year,
  type,
  country
/>
*/
export default JobContainer;
