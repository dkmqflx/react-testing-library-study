export default function JoinButton({ age }) {
  return (
    <div>
      <button disabled={age < 19}>가입</button>
      {age < 19 ? (
        <h3 style={{ color: "red" }}>성인만 가입할 수 있습니다</h3>
      ) : (
        <h3 style={{ color: "white" }}> 가입할 수 있습니다</h3>
      )}
    </div>
  );
}

/**
 * toBeInTheDocument와 같은 함수는
 * jest dom 공식문서에서 확인할 수 있다
 * https://github.com/testing-library/jest-dom
 * Custom matchers
 */
