function power(bottom, top) {
    if (top === 0) return 1
    return bottom * power(bottom, top - 1)
}