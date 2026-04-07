# AURA-converter
Converts 3D Gaussian Splat data into standard geometry for shader and material compatibility

## 목표
.splat 파일을 파싱하여 일반 3D 모델처럼 쉐이더, 조명, 머티리얼이 적용 가능한 표준 지오메트리로 변환한다.

## 폴더 구조

```
AURA-converter/
  src/
    index.ts       # 진입점
    adapters/      # .splat, .ply 등 다양한 입력 포맷을 내부 Gaussian 구조로 파싱
    primitives/    # Gaussian 데이터를 표준 지오메트리로 변환하는 방식별 구현체
      billboard/   # Gaussian을 카메라 방향 사각형으로 변환
      2dgs/        # Gaussian을 2D 평면 디스크로 변환
      mesh/        # Gaussian을 메쉬로 변환
    types/         # 내부 데이터 구조 정의 (GaussianData 등)
  test-samples/    # 테스트용 샘플 .splat 파일 (gitignore)
  output/          # 변환 결과물 저장 (gitignore)
```

## 변환 흐름

```
.splat / .ply / .spz / .glb
    ↓
[adapters]      → 내부 Gaussian 데이터 구조 (메모리)
                  { position, color, opacity, scale, rotation }
    ↓
[primitives]    → 표준 지오메트리 출력
                  쉐이더 / 조명 / 머티리얼 적용 가능한 상태
```