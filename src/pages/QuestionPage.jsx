import { useNavigate, useParams} from "react-router";
import { useFetch } from "../hooks/useFetch";
import { API } from "../constants/base-url";
import styles from "./QuestionPage.module.css";
import { backIcon } from "../icons";
import { MainQuastionPage } from "../components/MainQuastionPage/MainQuastionPage";
import { AsideQuastionPage } from "../components/AsideQuastionPage/AsideQuastionPage";

export const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useFetch(API.QUESTIONS);
  const quastions = Array.isArray(data) ? data : [];

  const { data: question } = useFetch(`${API.QUESTIONS}/${id}`);

  const currenIndex = quastions.findIndex((q) => q.id === Number(id));
  const prevQuastion = quastions[currenIndex - 1];
  const nextQuastion = quastions[currenIndex + 1];

  const goToSkill = (skill) => {
    navigate(`/?skills=${skill.id}`)
  } 

  const goToKeyWord = (word) => {
    navigate(`/?search=${encodeURIComponent(word)}`)
  }

  return (
    <div className={styles["question-page"]}>
      <div className={styles["question-detailed"]}>
        <button className={styles["btn-back"]} onClick={() => navigate(-1)}>
          <img src={backIcon} alt="" />
          <span>Назад</span>
        </button>
        <div className={styles["page-content"]}>
          <MainQuastionPage question={question} prevQuastion={prevQuastion} nextQuastion={nextQuastion}/>
          <AsideQuastionPage question={question} goToSkill={goToSkill} goToKeyWord={goToKeyWord}/>
        </div>
      </div>
    </div>
  );
};
