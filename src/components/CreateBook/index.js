import { useMutation } from "react-query";
import BookForm from "../../shared/BookForm";
import { createBook } from "../../api";
import Container from "../../shared/Container";
import { Box, Heading } from "rebass/styled-components";
import { useHistory } from "react-router";

const CreateBook = () => {
  const history = useHistory();
  const { mutateAsync, isLoading } = useMutation(createBook);
  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    history.push("/");
  };

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};

export default CreateBook;
