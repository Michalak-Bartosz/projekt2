import { format } from "date-fns";

const formatDate = "dd-MM-yyyy";

export const Events = [
  {
    id: 1,
    timelineId: 1,
    categoryId: 3,
    name: "Rome",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startDate: format(new Date("2020-05-01"), formatDate),
    endDate: format(new Date("2020-06-01"), formatDate),
    images: [
      "https://cdn.pixabay.com/photo/2019/10/06/08/57/tiber-river-4529605_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/02/01/16/15/colosseum-2030639_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/05/14/23/43/street-3401918_1280.jpg",
    ],
  },
  {
    id: 2,
    timelineId: 1,
    categoryId: 2,
    name: "Majorka",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    startDate: format(new Date("2021-07-21"), formatDate),
    endDate: format(new Date("2021-08-21"), formatDate),
    images: [
      "https://cdn.pixabay.com/photo/2017/02/26/14/31/beach-2100369_1280.jpg",
    ],
  },
  {
    id: 3,
    timelineId: 1,
    categoryId: 1,
    name: "Kabacki Forest",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    startDate: format(new Date("2022-03-15"), formatDate),
    endDate: format(new Date("2022-04-15"), formatDate),
    images: [
      "https://cdn.pixabay.com/photo/2017/11/25/22/26/moss-2977795_1280.jpg",
    ],
  },
  {
    id: 4,
    timelineId: 1,
    categoryId: 4,
    name: "Jastarnia Beach",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    startDate: format(new Date("2023-11-02"), formatDate),
    endDate: format(new Date("2023-12-02"), formatDate),
    images: [
      "https://cdn.pixabay.com/photo/2021/03/17/12/01/sea-6102171_1280.jpg",
    ],
  },
  {
    id: 5,
    timelineId: 2,
    categoryId: 1,
    name: "Ciechocinek",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    startDate: format(new Date("2018-01-01"), formatDate),
    endDate: format(new Date("2018-02-01"), formatDate),
    images: [
      "https://cdn.pixabay.com/photo/2019/02/02/19/09/ciechocinek-3971192_1280.jpg",
    ],
  },
  {
    id: 6,
    timelineId: 2,
    categoryId: 3,
    name: "Białystok",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    startDate: format(new Date("2019-02-02"), formatDate),
    endDate: format(new Date("2019-03-02"), formatDate),
    images: [
      "https://cdn.pixabay.com/photo/2016/07/08/12/41/biaystok-1504257_1280.jpg",
    ],
  },
  {
    id: 7,
    timelineId: 2,
    categoryId: 2,
    name: "Helsinki",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startDate: format(new Date("2022-03-03"), formatDate),
    endDate: format(new Date("2022-04-03"), formatDate),
    images: [
      "https://cdn.pixabay.com/photo/2019/05/08/22/01/helsinki-cathedral-4189825_1280.jpg",
    ],
  },
];
