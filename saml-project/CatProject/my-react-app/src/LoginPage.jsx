function LoginPage() {
  const handleLogin = () => {
    // ログイン開始 → ブラウザを /auth/login に飛ばす
    window.location.href = "http://localhost:8080/auth/login";
  };

  return (
    <div>
      <p>ログイン画面にゃ！</p>
      <button onClick={handleLogin}>ログインするにゃ！</button>
    </div>
  );
}