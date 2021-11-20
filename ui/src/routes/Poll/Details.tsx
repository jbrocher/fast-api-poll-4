import React, { useState } from "react";
import Card from "@mui/material/Card";
import Page from "components/template/Page";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { QuestionResults } from "types";

const Details = () => {
  const { questionId } = useParams();
  const [hasVoted, setHasVoted] = useState(false);

  const questionQuery = useQuery<QuestionResults>(`polls/${questionId}/`);

  if (!questionQuery.isSuccess) {
    return <div> loading </div>;
  }

  return (
    <Page title={questionQuery.data.question_text}>
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <Typography variant="h2">
            {questionQuery.data.question_text}
          </Typography>
        </Grid>
        {questionQuery.data.choices.map((choice) => (
          <Grid item xs={12} md={6}>
            <Card key={choice.id}>
              <CardActionArea onClick={() => setHasVoted(true)}>
                <CardHeader title={choice.choice_text}></CardHeader>
                <CardContent>
                  {hasVoted && <Chip label={choice.votes} color="success" />}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default Details;
