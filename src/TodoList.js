import { useState, useEffect } from "react";
export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((json) => setTodoList(json))
      .catch(() => {
        setErrorMsg("에러 발생");
      });
  }, []);

  return (
    <>
      <h1>Todo</h1>
      {errorMsg && <p>{errorMsg}</p>}
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : undefined,
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
/**
 * 프론트엔드 작업이 딜레이 되는 경우 :
 * - API 아직 안나옴
 * - 언하는 형태의 데이터가 아님
 * - 에러는 어떻게 발생시킬까 ?
 *
 * ex)
 * 상품명이 10자 이상이면 어떻게 나올까?
 * 판매중단 된 상품 && 성인만 열람할 수 있는 상품 목록
 * 500 에러가 났을 때 화면을 보고 싶은데 ..
 *
 * msw를 사용하면 이 문제를 해결할 수 있다
 */
