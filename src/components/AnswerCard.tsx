import { View, Text } from "react-native";
import { answerStyles } from "../styles/answerStyles";

type Props = {
  answer: { id: string; text: string; description: string };
}

const AnswerCard = ({ answer }: Props) => {
  return (
    <View style={answerStyles.answerCard}>
      <Text style={answerStyles.optionLetter}>{answer.id}{")"}</Text>
      <Text style={answerStyles.answerText}>{answer.text}</Text>
      <Text style={answerStyles.answerDescription}>{answer.description}</Text>
    </View>
  );
};

export default AnswerCard;
