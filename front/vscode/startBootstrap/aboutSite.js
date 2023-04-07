window.onload = () =>{
     // 아래의 옵션으로 뷰포트가 무엇인지, 그리고 교차영역은 어떻게 할 것인지 정해줍니다. 

     const handleScroll = () => {
        console.log("스크롤중이다!");
        // TODO example code
        // const scrollTop = document.documentElement.scrollTop;
        // ...
      };

     const options = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0 // 50%가 viewport에 들어와 있어야 callback 실행
    };

    // new IntersectionObserver객체의 콜백함수를 인자로 줍니다. 
    // 이때 entries는 스크롤 이벤트를 적용할 모든 dom 객체입니다. 

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // 해당 dom이 교차영역에 진입 시 적용하고 싶은 로직 작성


            if (entry.isIntersecting) {
                entry.target.classList.add("inView");
            }
        });
    }, options);

    const boxList = document.querySelectorAll(".img");

    // 반복문을 돌려 모든 DOM에 스크롤 이벤트 적용
    boxList.forEach((el) => observer.observe(el));










};