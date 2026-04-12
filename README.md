# AURA-converter
Converts 3D Gaussian Splat data into standard geometry for shader and material compatibility

## 목표
.ply / .splat 파일을 파싱하여 일반 3D 모델처럼 쉐이더, 조명, 머티리얼이 적용 가능한 표준 지오메트리로 변환한다.

## 폴더 구조

```
AURA-converter/
  src/
    main.ts            # 진입점 (CLI 실행)
    converter/
      Converter.ts     # 파이프라인 오케스트레이터
    adapters/
      AdapterRegistry.ts  # 확장자 기반 어댑터 선택
      PlyAdapter.ts       # .ply 파싱 구현체
    primitives/        # GaussianData → 표준 지오메트리 변환 방식별 구현체
      billboard/
      2dgs/
      mesh/
    glb/
      GlbWriter.ts     # ConvertedGeometry → .glb 출력
    types/
      GaussianData.ts      # 어댑터 출력 타입
      IAdapter.ts          # 어댑터 인터페이스
      IPrimitive.ts        # 프리미티브 인터페이스
      ConvertedGeometry.ts # 프리미티브 출력 타입
  test-samples/        # 테스트용 샘플 파일 (gitignore)
  output/              # 변환 결과물 저장 (gitignore)
```

## 변환 흐름

```
.ply / .splat / ...
    ↓
[AdapterRegistry]   → 확장자 기반으로 어댑터 선택
    ↓
[IAdapter.parse()]  → GaussianData (position, color, opacity, scale, rotation)
    ↓
[IPrimitive.build()] → ConvertedGeometry
    ↓
[GlbWriter]         → .glb 출력
```
