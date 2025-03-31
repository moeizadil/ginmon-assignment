import { View, Text, TouchableOpacity } from "react-native";
import { questionStyles } from "../styles/questionStyles";

interface Props {
  question: { id: number; text: string; description: string };
  onSelect: (id: number) => void;
  isSelected: boolean;
}

const QuestionCard = ({ question, onSelect, isSelected }: Props) => {
  return (
    <TouchableOpacity
      style={[questionStyles.questionCard, isSelected && questionStyles.selectedQuestionCard]}
      onPress={() => onSelect(question.id)}
    >
      <Text style={questionStyles.questionText}>{question.text}</Text>
      <Text style={questionStyles.questionDescription}>{question.description}</Text>
    </TouchableOpacity>
  );
};

export default QuestionCard;
