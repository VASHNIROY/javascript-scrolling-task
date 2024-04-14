import codeweb from "../utils/code.webp";
import logo from "../utils/logo.svg";
import bee from "../utils/bee.webp";
import mayfair from "../utils/mayfair.webp";
import "./style.css";

function ScrollSnapping() {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none me-auto"
          >
            <img width="50" src={logo} alt="Logo" />
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="javascript:;" className="nav-link active">
                Contact
              </a>
            </li>
          </ul>
        </header>
      </div>
      <div className="px-4 py-5 text-center border-bottom border-top bg-light">
        <h1 className="display-4 fw-bold">What is Lorem Ipsum?</h1>
        <div className="col-lg-6 mx-auto">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            This is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour. If you are going to use a passage of Lorem Ipsum, you need
            to be sure there isn't anything embarrassing hidden in the middle of
            text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </div>
      </div>
      <div className="position-relative">
        <div className="scroll-container">
          <div className="bg-primary text-white align-items-center d-flex  vh-100 scroll-item ">
            <div class="container col-xxl-8 px-4 py-5">
              <div class="row  align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                  <img
                    src={codeweb}
                    alt="new code"
                    class="d-block mx-lg-auto img-fluid"
                    width="700"
                    height="500"
                  />
                </div>
                <div class="col-lg-6">
                  <h1 class="display-5 fw-bold lh-1 mb-3">
                    Where can I get some?
                  </h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary text-white align-items-center d-flex vh-100 scroll-item ">
            <div class="container col-xxl-8 px-4 py-5">
              <div class="row  align-items-center g-5 py-5">
                <div class="col-lg-6">
                  <h1 class="display-5 fw-bold lh-1 mb-3">
                    Where can I get some?
                  </h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.{" "}
                  </p>
                </div>
                <div class="col-10 col-sm-8 col-lg-6">
                  <img
                    src={mayfair}
                    alt="new code"
                    class="d-block mx-lg-auto img-fluid"
                    width="700"
                    height="500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary text-white align-items-center d-flex  vh-100 scroll-item ">
            <div class="container col-xxl-8 px-4 py-5">
              <div class="row  align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                  <img
                    src={bee}
                    alt="new code"
                    class="d-block mx-lg-auto img-fluid"
                    width="700"
                    height="500"
                  />
                </div>
                <div class="col-lg-6">
                  <h1 class="display-5 fw-bold lh-1 mb-3">
                    Where can I get some?
                  </h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 text-center border-bottom border-top bg-light">
        <h1 className="display-4 fw-bold">What is Lorem Ipsum?</h1>
        <div className="col-lg-6 mx-auto">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            This is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour. If you are going to use a passage of Lorem Ipsum, you need
            to be sure there isn't anything embarrassing hidden in the middle of
            text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It us es a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </div>
      </div>
      <footer className="bg-grey-dark text-white">
        <div className="container">
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4">
            <p className="mb-0">© Google 2024</p>
            <p className="mb-0">
              <a
                href="javascript:;"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
              >
                Google.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ScrollSnapping;
