import styled from "styled-components";

const Content = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;

  a {
    color: #007bff;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const TeamSummary = () => {
  return (
    <Content>
      <p>
        The training set should be used to build your machine learning models.
        For the training set, we provide the outcome (also known as the “ground
        truth”) for each passenger. Your model will be based on “features” like
        passengers’ gender and class. You can also use{" "}
        <a href="#">feature engineering</a> to create new features.
      </p>
    </Content>
  );
};

export default TeamSummary;
