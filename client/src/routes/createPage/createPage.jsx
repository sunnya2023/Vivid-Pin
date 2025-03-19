import Image from "../../components/Image/Image";
import "./createPage.css";

const CreatePage = () => {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Post</h1>
        <button className="btn createBtn">업로드</button>
      </div>

      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="/general/upload.svg" alt="" />
            <span>파일 선택하기</span>
          </div>
          <div className="uploadInfo">
            이미지 크기는 20MB 이하로 업로드해주세요.
          </div>
        </div>

        <div className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              name="title"
              id="title"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="desc">설명</label>
            <textarea
              rows={6}
              type="text"
              placeholder="내용을 입력해주세요"
              name="desc"
              id="desc"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="link">Link</label>
            <input type="text" placeholder="" name="link" id="link" />
          </div>
          <div className="createFormItem">
            <label htmlFor="board">Board</label>
            <select name="board" id="board">
              <option>배경색을 선택해주세요</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>

          <div className="createFormItem">
            <label htmlFor="tags">태그</label>
            <input
              type="text"
              placeholder="태그를 넣어주세요"
              name="tags"
              id="tags"
            />
            <small>태그는 화면에 노출되지 않습니다</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
