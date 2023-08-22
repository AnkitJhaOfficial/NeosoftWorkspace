package com.redisdemo.controller;


import com.redisdemo.entity.Product;
import com.redisdemo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

    public final ProductService productService;

    @GetMapping
    public Product findProductById(@RequestParam("id") Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/fetch-all")
    public List<Product> findAllProduct() {
        return productService.getAllProduct();
    }

    @DeleteMapping
    public String deleteProductById(@RequestParam("id") Long id) {
        productService.deleteProductById(id);
        return "Product Deleted Successfully";
    }
}
