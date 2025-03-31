import { useState } from "react";
import { View, ScrollView } from "react-native";
import { useMediaQuery } from "react-responsive";
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";
import { questions } from "../data/questions";
import { answers } from "../data/answers";
import { mainScreenStyles } from "../styles/mainScreenStyles";

const MainScreen = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0].id);
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <View style={[mainScreenStyles.container, isDesktop && mainScreenStyles.desktopContainer]}>
      {/* Question List */}
      <ScrollView horizontal style={{ marginBottom: 10 }}>
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} isSelected={q.id === selectedQuestion} onSelect={setSelectedQuestion} />
        ))}
      </ScrollView>

      {/* Answer List - Make Sure It Scrolls */}
      <ScrollView style={{ flex: 10 }} contentContainerStyle={{ flexGrow: 10 }}>
        {answers[selectedQuestion]?.map((answer) => (
          <AnswerCard key={answer.id} answer={answer} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainScreen;
