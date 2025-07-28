// src/locales/vi/translation.ts
import type { TranslationContent } from '../types.js';

const translationVN: TranslationContent = {
  logoTitle: 'Hội An Của Tôi',
  moreDetails: 'Xem thêm chi tiết',
  details: 'Chi tiết',
  category: 'Danh mục',
  description: 'Mô tả',
  youAreHere: 'Bạn đang ở đây',
  close: 'Đóng',
  noDetailsAvailable: 'Không có thông tin chi tiết cho đối tượng này.',
  welcomeMessage: 'Xin chào! Chào mừng đến Hội An!',
  noMarkers: 'Chọn một điểm đánh dấu hiện có trên bản đồ',
  swiperWelcomeTitle: 'Xin chào!',
  swiperWelcomeSubtitle: 'Vui lòng chọn một điểm đánh dấu trên bản đồ.',
  welcomeDialogTitle: 'Du khách!',
  welcomeDialogMessage: 'Cảm ơn bạn đã đồng hành cùng chúng tôi!',
  thankYouMessage:
    'Cẩm nang này chỉ mới bắt đầu hành trình của mình, nhưng sẽ phát triển và tốt hơn nhờ những phản hồi và góp ý của bạn!',
  welcomeClose: 'Đóng',

  // Các dòng mới cho yêu cầu vị trí
  locationPermissionTitle: 'Quyền truy cập vị trí',
  locationPermissionExplanation:
    'Để hiển thị các điểm tham quan tốt hơn trên bản đồ, chúng tôi cần truy cập vào vị trí hiện tại của bạn. Điều này sẽ giúp hiển thị các địa điểm gần bạn.',
  locationPermissionNote:
    'Vị trí của bạn sẽ không được lưu trữ hoặc chia sẻ với bên thứ ba.',
  allow: 'Cho phép',
  deny: 'Từ chối',
  findMyPosition: 'Tìm vị trí của tôi',
  geolocationError: 'Đã xảy ra lỗi khi lấy vị trí.',
  userDeniedLocation:
    'Người dùng đã từ chối yêu cầu xác định vị trí. Vui lòng cho phép truy cập trong cài đặt trình duyệt.',
  locationUnavailable: 'Thông tin vị trí không khả dụng.',
  locationTimeout: 'Đã hết thời gian chờ khi lấy vị trí.',
  unknownLocationError: 'Đã xảy ra lỗi không xác định khi lấy vị trí.',

  footer: {
    copyright: 'Mọi quyền được bảo lưu.',
  },
  menu: {
    title: 'Menu',
  },
  categories: {
    museum: 'Bảo tàng',
    'food-drinks': 'Đồ ăn & Thức uống',
    'art-galleries': 'Nghệ thuật',
    clubs: 'Câu lạc bộ',
  },
};

export default translationVN;
