#include <iostream>
#include <vector>
using namespace std;

const long long MOD = 1000;  // 모듈러 연산용 상수

struct Matrix {
  vector<vector<long long>> m;
  int size;

  // 행렬크기 n으로 초기화
  Matrix(int n) : size(n) { m.resize(n, vector<long long>(n)); }

  // 연산자 오버로딩 - 행렬 곱셈
  Matrix operator*(const Matrix& mm) {
    Matrix result(size);
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        result.m[i][j] = 0;
        for (int k = 0; k < size; k++) {
          result.m[i][j] += (m[i][k] * mm.m[k][j]) % MOD;
          result.m[i][j] %= MOD;
        }
      }
    }

    return result;
  }
};

// 거듭제곱용 함수
Matrix pow(Matrix base, long long exp) {
  int size = base.size;
  Matrix result(size);

  for (int i = 0; i < size; i++) {
    result.m[i][i] = 1;
  }

  while (exp > 0) {
    if (exp % 2 == 1) {
      result = result * base;
    }
    base = base * base;
    exp /= 2;
  }
  return result;
}

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  long long b;
  cin >> n >> b;

  Matrix M(n);
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      cin >> M.m[i][j];
    }
  }

  Matrix result = pow(M, b);  // 거듭제곱

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      cout << result.m[i][j] << " ";
    }
    cout << "\n";
  }

  return 0;
}