import { NextRequest, NextResponse } from "next/server";

// Xử lý POST (Zalo OA webhook gửi dữ liệu)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // lấy dữ liệu JSON từ webhook

    console.log("📩 Webhook Zalo OA nhận được:", body);

    // Trả về status 200 để Zalo biết là server đã nhận
    return NextResponse.json({ message: "Received" }, { status: 200 });
  } catch (error) {
    console.error("❌ Lỗi khi xử lý webhook:", error);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}

// (Optional) Xử lý GET để test nhanh trên trình duyệt
export async function GET() {
  return NextResponse.json({ message: "Zalo Webhook is working" });
}
