import { useEffect } from "react";
import { useState } from "react";

export default function UserList({ users }) {
  const [showTitle, setShowTitle] = useState(false);

  // 0.5 초후에 true로 바꾸는 코드
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 500);
  }, []);

  return (
    <ul>
      {showTitle && <h1>사용자 목록</h1>}
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
}

// getBy Query가 딱 하나의 요소에 접근할 수 있었다면
// getAllBy를 사용해서 DOM의 특정 모든 요소에 접근할 수 있다.
