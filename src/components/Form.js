function Form() {
    return (
        <form>
            <span>안녕하세요. 이름님.</span>
            <input type='text' id='todo' placeholder='e.g. 강아지 산책 시키기'/>
            <button>Personal</button>
            <button>Business</button>
        </form>
    );
}

export default Form;