export default function MyPage({ user }) {
  return (
    <div>
      <h1>h1</h1>
      <h2>h2</h2>
      <div>
        <label htmlFor="username">이름</label>
        <input type="text" id="username" value="Tom" readOnly></input>
      </div>

      <div data-testid="my-div" />

      <div>
        <label htmlFor="profile">자기소개</label>
        <textarea id="profile"></textarea>
      </div>
    </div>
  );
}
