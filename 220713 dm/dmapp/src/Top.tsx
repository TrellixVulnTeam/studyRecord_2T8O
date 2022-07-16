import './scss/Top.scss';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Top() {
  return (
    <div className="Top">
        <div className='form'>
          <p className='top'>ログインする</p>
          <form action="/">
            <div className="email">
              <label htmlFor='email'>
                <p>メールアドレス：</p>
                <input type="email" placeholder='例）abcd@abcd.ab'/>
              </label>
            </div>
            <div className="password">
              <label htmlFor='password'>
                <p>パスワード：</p>
                <input type="password" />
              </label>
            </div>
            <div className="submit">
              <label>
                <input type="submit" value="ログイン" />
              </label>
            </div>
          </form>
      </div>
    </div>
  );
}
export default Top;
