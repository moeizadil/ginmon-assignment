// AnswerCard.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { answerStyles } from "../styles/answerStyles";

type Props = {
  answer: { id: string; text: string; description: string };
  onSelect?: () => void;
  isSelected?: boolean;
};

const AnswerCard = ({ answer, onSelect, isSelected }: Props) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={[answerStyles.answerCard, isSelected && answerStyles.selectedAnswerCard]}>
        <Text style={answerStyles.optionLetter}>{answer.id})</Text>
        <Text style={answerStyles.answerText}>{answer.text}</Text>
        <Text style={answerStyles.answerDescription}>{answer.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AnswerCard;
