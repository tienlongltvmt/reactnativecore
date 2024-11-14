Kiến thức cơ bản:

- Hãy giải thích sự khác biệt giữa React và React Native.
  - Code của react native và react không khác gì nhiều, React native là để code mobile và phải biên dịch về native và React Native là framework còn react là code web không phải biên dịch và là thư viện ủi cho web
- Bạn có thể giải thích cách hoạt động của vòng đời của một component trong React Native không?
  - Constructor => componentDidMount => shouldComponentUpdate => componentDidUpdate => componentWillUnmount =>
- Bạn hiểu các khái niệm JSX, props, state và lifecycle methods trong React Native như thế nào?

  - JSX cho phép viết HTML trong JavaScript, giúp mã dễ đọc và trực quan hơn.
  - Props là dữ liệu truyền từ thành phần cha cho thành phần con.
  - State là dữ liệu nội bộ của thành phần, phản ánh trạng thái hiện tại của nó.
  - Lifecycle methods cho phép điều khiển hành vi của thành phần trong các giai đoạn khác nhau của vòng đời

- Hãy kể tên và giải thích các công cụ và thư viện React Native phổ biến nhất bạn đã sử dụng.

  - Expo, React Navigation, Redux, Reactotron,
    - Expo: là một công cụ giúp bạn tạo ứng dụng React Native nhanh chóng và dễ dàng hơn
    - React Navigation: là một thư viện giúp bạn quản lý các màn hình trong ứng dụng
    - Redux: là một thư viện giúp bạn quản lý state của ứng dụng
    - Reactotron: là một công cụ giúp bạn debug ứng dụng

- Bạn có hiểu và đã sử dụng các công cụ kiểm tra (debugging) như Redux DevTools, React Native Debugger, Flipper không?

  - Redux DevTools: là một công cụ giúp bạn debug state của ứng dụng
  - React Native Debugger: là một công cụ giúp bạn debug ứng dụng
  - Flipper: là một công cụ giúp bạn debug ứng dụng

- Bạn có thể giải thích về các khái niệm "functional component" và "class component" trong React Native không?

  - Functional component: Là một hàm đơn giản nhận props (thuộc tính) làm đầu vào và trả về JSX (cú pháp HTML-like của React) để hiển thị UI (Sau này React phát triển Hook từ đó Functional component được sử dụng như 1 class component)
  - Class component: là một thành phần React được định nghĩa bởi class trong JavaScript.sử dụng extends React.Component để kế thừa các phương thức và thuộc tính từ React.Component.

- Bạn có thể giải thích về các khái niệm "PureComponent" và "memo" trong

  - Trong React, PureComponent và memo là hai khái niệm liên quan nhưng riêng biệt giúp tối ưu hóa việc render các component.
  - PureComponent: Một PureComponent là một loại component React thực hiện phương thức shouldComponentUpdate(). Phương thức này được gọi mỗi khi các props hoặc state của component thay đổi, và nó trả về một giá trị boolean chỉ định liệu component có nên re-render hay không.
  - memo: memo là một higher-order component (HOC) bao quanh một component và lưu trữ output của nó. Lưu trữ là một kỹ thuật lưu trữ kết quả của một hàm gọi đắt tiền để nó có thể được tái sử dụng thay vì tính toán lại.

- Bạn có thể giải thích về các khái niệm "Context API" và "Provider" trong

  - Context API: là một API giúp bạn chia sẻ state giữa các thành phần component mà không cần truyền props xuống thủ công. nó như là biến global bạn có thể sử dụng nó bất cứ đâu
  - Provider: Một Provider là một component bao quanh ứng dụng của bạn và cung cấp dữ liệu Context cho tất cả các component bên trong nó. Nó giống như một container chứa dữ liệu Context và làm cho nó có sẵn cho các component con của nó.

- Bạn có thể giải thích về các khái niệm "Redux" và "Redux Toolkit" trong
- Redux: là một thư viện giúp bạn quản lý state của ứng dụng
- Redux Toolkit: là một thư viện giúp bạn quản lý state của ứng dụng một cách dễ dàng
- Bạn có thể giải thích về các khái niệm "React Query" và "React Query Client
- React Query: là một thư viện giúp bạn quản lý dữ liệu của ứng dụng
- React Query Client: là một thư viện giúp bạn quản lý dữ liệu của ứng dụng một cách

  Kiến thức chuyên sâu:

- Hãy giải thích về cách hoạt động của Redux trong React Native.

  - Redux là một thư viện quản lý trạng thái phổ biến trong cộng đồng React. Nó giúp bạn quản lý trạng thái của ứng dụng một cách hiệu quả và dễ dàng hơn.
  - Cách hoạt động của Redux
    - Khi người dùng tương tác với ứng dụng, một hành động sẽ được gửi đến Store. Store sẽ gọi reducer tương ứng để thay đổi trạng thái của ứng dụng. Reducer sẽ trả về trạng thái mới và Store sẽ cập nhật trạng thái của ứng dụng. Cuối cùng, View sẽ được cập nhật để hiển thị trạng thái mới của ứng dụng.

- Bạn đã sử dụng các thư viện quản lý trạng thái (state management) nào ngoài Redux? So sánh điểm mạnh và yếu của chúng.

- Bạn có kinh nghiệm về tối ưu hóa hiệu năng cho ứng dụng React Native không? Chia sẻ về các kỹ thuật bạn đã áp dụng.

  - Viết code gọn
  - Sử dụng memo
  - Tách nhỏ components
  - Sử dụng React Query

- Hãy giải thích về cách sử dụng Navigation trong React Native.

- Bạn có thể giải thích các phương thức giao tiếp giữa các component trong React Native không?
- Bạn có kinh nghiệm sử dụng các thư viện mạng (networking) như Axios, Fetch API, GraphQL trong React Native không?
  Kinh nghiệm thực tế:
- Hãy chia sẻ về một dự án React Native phức tạp bạn đã tham gia. Bạn đã gặp phải những khó khăn gì và cách giải quyết chúng?
- Hãy giải thích về cách bạn thực hiện testing cho ứng dụng React Native.
- Bạn có kinh nghiệm về việc triển khai ứng dụng React Native lên các kho ứng dụng (app store) không?
- Bạn có thể chia sẻ về các chiến lược tối ưu hóa performance cho ứng dụng React Native để đảm bảo trải nghiệm người dùng tốt nhất?
- Bạn có kinh nghiệm về việc sử dụng các công cụ CI/CD (Continuous Integration/Continuous Deployment) cho ứng dụng React Native không?
  Phần câu hỏi mở rộng:
- Theo bạn, React Native có những ưu điểm và nhược điểm gì so với các framework mobile khác?
- Bạn có theo dõi những công nghệ mới trong React Native không? Chia sẻ về những công nghệ bạn cảm thấy thú vị và tiềm năng.
- Bạn có thể chia sẻ về phong cách lập trình (coding style) của bạn trong React Native không?
  Ngoài ra, người phỏng vấn có thể yêu cầu bạn viết code để giải quyết một bài toán cụ thể, hoặc yêu cầu bạn thực hiện một bài test kỹ năng.
  Lưu ý:
- Những câu hỏi phỏng vấn này chỉ là một ví dụ, và có thể thay đổi tùy theo yêu cầu cụ thể của công việc.
- Hãy chuẩn bị thật kỹ càng để thể hiện kiến thức và kinh nghiệm của bạn.
- Hãy tự tin và cởi mở khi trả lời các câu hỏi.
  Chúc bạn may mắn!
