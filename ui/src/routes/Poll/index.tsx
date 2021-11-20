import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Question } from "types";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Page from "components/template/Page";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const PollIndex: React.FunctionComponent = () => {
  const { data: questions, isSuccess } = useQuery<Question[]>("polls/");

  if (!isSuccess) {
    return <div> no questions </div>;
  }

  return (
    <Page title="Index">
      <Container maxWidth="sm">
        {questions?.map((question) => (
          <Box marginY={2}>
            <StyledLink to={`${question.id}/results/`}>
              <Card key={question.id}>
                <Typography color="primary" gutterBottom variant="h3">
                  {question.question_text}
                </Typography>
              </Card>
            </StyledLink>
          </Box>
        ))}
      </Container>
    </Page>
  );
};

export default PollIndex;
